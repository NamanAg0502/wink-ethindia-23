// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./PetProfile.sol";

contract ProofOfCare {
    PetProfile public petProfile;

    struct proofOfCare {
        uint256 petId;
        address caregiver;
        string updates;
        uint256 timestamp;
    }

    mapping(uint256 => proofOfCare) public proofOfCares;

    event ProofOfCareSubmitted(
        uint256 indexed petId,
        address indexed caregiver,
        string updates,
        uint256 timestamp
    );

    constructor(address _petProfile) {
        petProfile = PetProfile(_petProfile);
    }

    function submitProofOfCare(
        uint256 _petId,
        string memory _updates
    ) external {
        require(petProfile.pets(_petId), "Pet doesn't exists"); // Ensure the pet exists

        proofOfCares[_petId].push(
            ProofOfCare({
                petId: _petId,
                caregiver: msg.sender,
                updates: _updates,
                timestamp: block.timestamp
            })
        );

        emit ProofOfCareSubmitted(
            _petId,
            msg.sender,
            _updates,
            block.timestamp
        );
    }
}
