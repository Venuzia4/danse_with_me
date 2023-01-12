package com.danse.danseWithMe.controllers;

import com.danse.danseWithMe.dto.UserDto;
import com.danse.danseWithMe.entities.Dance;
import com.danse.danseWithMe.entities.User;
import com.danse.danseWithMe.repositories.UserDanceRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class UserDanceController {
    @Autowired
    private UserDanceRepository userDanceRepository;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/usersbydance")
    public List<UserDto> getUsersByDances(@RequestParam String name){
        return userDanceRepository.findUserDanceBy(name).stream().map(
                users-> modelMapper.map(users,UserDto.class)).collect(Collectors.toList());

    }





}
