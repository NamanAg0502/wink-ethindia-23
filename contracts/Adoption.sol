// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./PetProfile.sol";

contract Adoption {
    PetProfile public petProfile;

    struct adoptionData {
        uint256 petId;
        address adopter;
        uint256 adoptionTimestamp;
        uint256 adoptionFee;
    }

    mapping(uint256 => adoptionData) public adoptions;
    uint256 public adoptionIdCounter;

    event PetAdopted(
        uint256 indexed petId,
        address indexed adopter,
        uint256 adoptionFee
    );

    constructor(address _petProfile) {
        petProfile = PetProfile(_petProfile);
    }

    function adoptPet(uint256 _petId) external payable {
        require(petProfile.pets(_petId), "Pet does not exist");

        require(msg.value >= 0.1 ether, "Adoption fee is at least 0.1 ether");

        adoptionIdCounter++;
        adoptions[adoptionIdCounter] = Adoption({
            petId: _petId,
            adopter: msg.sender,
            adoptionTimestamp: block.timestamp,
            adoptionFee: msg.value
        });

        emit PetAdopted(_petId, msg.sender, msg.value);
    }
}
