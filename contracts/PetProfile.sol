// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PetProfile {
    struct Pet {
        uint256 id;
        string species;
        string breed;
        uint256 addTimestamp;
        string medicalHistory;
        string behaviorAssessment;
        address shelter;
    }

    mapping(uint256 => Pet) public pets;
    uint256 public petIdCounter;

    event PetAdded(
        uint256 indexed id,
        string species,
        string breed,
        address shelter
    );

    function addPet(
        string memory _species,
        string memory _breed,
        string memory _medicalHistory,
        string memory _behaviorAssessment
    ) external {
        petIdCounter++;
        pets[petIdCounter] = Pet({
            id: petIdCounter,
            species: _species,
            breed: _breed,
            addTimestamp: block.timestamp,
            medicalHistory: _medicalHistory,
            behaviorAssessment: _behaviorAssessment,
            shelter: msg.sender
        });

        emit PetAdded(petIdCounter, _species, _breed, msg.sender);
    }
}
