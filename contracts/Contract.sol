//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
//import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasure is Ownable {

    struct Data {
        address user;
        uint256 portion; 
    }

    Data[] data;

    constructor(address[] memory _users, uint256[] memory _portions) {
        for(uint i = 0; i < _users.length; i++) {
            Data memory info = Data({
                user: _users[i],
                portion: _portions[i]
            });
            data.push(info);
        }
    }

    function _addUser(address _user, uint256 _portion) external onlyOwner returns (bool) {
        Data memory info = Data({
            user: _user,
            portion: _portion
        });
        data.push(info);

        return true;
    }

    function _remoteUser(address _user) external onlyOwner returns (bool) {
        for (uint i = 0; i < data.length; i++) {
            if (data[i].user == _user) {
                delete data[i];

                return true;
            }
        }

        return false;
    }

    function _changePortion(address _user, uint256 _portion) external onlyOwner returns (bool) {
        for (uint i = 0; i < data.length; i++) {
            if (data[i].user == _user) {
                data[i].portion = _portion;

                return true;
            }
        }

        return false;
    }

    function distribute(address _token) external returns (bool) {
        uint256 amount = IERC20(_token).balanceOf(address(this));

        for(uint i = 0; i < data.length; i++) {
            IERC20(_token).transfer(data[i].user, amount / 100 * data[i].portion);
        }

        return true;
    }
}