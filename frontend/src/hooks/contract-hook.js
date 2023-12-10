// import { Contract } from 'ethers';
// import { useMemo } from 'react';
// import { ABI } from '@/config/abi';
// import { useWeb3Context } from '@/context/ethers-provider';

// const address = '0xDD3EEb76e1D968F379C9805AbEea4A80bda78fEd';

// const usePixelPawContract = () => {
//   const { state } = useWeb3Context();

//   return useMemo(
//     () => state.signer && new Contract(address, ABI, state.signer),
//     [state.signer]
//   );
// };

// export default usePixelPawContract;

'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import PetCareSystemContract from '../config/abi.json'; // Path to your compiled contract ABI and address

const usePetCareSystem = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectToBlockchain = async () => {
      // Connect to the Ethereum provider (use your Infura or other provider URL)
      const provider = new ethers.providers.JsonRpcProvider(
        'https://sepolia-rpc.scroll.io/'
      );

      // Connect to the user's wallet (MetaMask, etc.)
      const [userAccount] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Set the account state
      setAccount(userAccount);
      const contractadd = '0xDD3EEb76e1D968F379C9805AbEea4A80bda78fEd';
      const signer = await provider.getSigner();
      console.log('====================================');
      console.log(PetCareSystemContract.address);
      console.log('====================================');
      // Create a contract instance
      const petCareSystemContract = new ethers.Contract(
        contractadd, // Contract address
        PetCareSystemContract, // Contract ABI
        signer // Signer for the user's account
      );

      // Set the contract state
      setContract(petCareSystemContract);
    };

    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      connectToBlockchain();
    } else {
      console.error('MetaMask not installed');
    }
  }, []);

  // Function to add a new pet
  const addPet = async (
    species,
    breed,
    medicalHistory,
    behaviorAssessment,
    imageUrl,
    description
  ) => {
    try {
      // Check if the contract and account are available
      if (contract && account) {
        const tx = await contract.addPet(
          species,
          breed,
          medicalHistory,
          behaviorAssessment,
          imageUrl,
          description,
          { gasLimit: 2000000 } // Adjust the gas limit as needed
        );
        await tx.wait(); // Wait for the transaction to be mined
      } else {
        console.error('Contract or account not available');
      }
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  // Other functions for interacting with the contract can be similarly defined (submitProofOfCare, adoptPet, etc.)

  return { account, addPet /*, other functions */ };
};

export default usePetCareSystem;
