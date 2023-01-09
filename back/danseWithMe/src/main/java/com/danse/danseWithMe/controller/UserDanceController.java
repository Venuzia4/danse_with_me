package com.danse.danseWithMe.controller;

import com.danse.danseWithMe.entity.User;
import com.danse.danseWithMe.repository.UserDanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserDanceController {
    @Autowired
    private UserDanceRepository userDanceRepository;





   // @GetMapping("/users/dances")
   // public List<User> getUsersByDances(@RequestParam String name){
      //  return userDanceRepository.findUserDanceById(name);
   // }


}
