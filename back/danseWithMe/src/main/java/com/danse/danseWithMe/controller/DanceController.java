package com.danse.danseWithMe.controller;

import com.danse.danseWithMe.entity.Dance;
import com.danse.danseWithMe.entity.User;
import com.danse.danseWithMe.repository.DanceRepository;
import com.danse.danseWithMe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DanceController {
    @Autowired
    private DanceRepository danceRepository;


    @Autowired
    private UserRepository userRepository;


    @GetMapping("/dances")
    public List<Dance> getDances() {
        return (List<Dance>) danceRepository.findAll();

    }

    @GetMapping("/dance/{id}")
    public Dance getDance(@PathVariable Integer id) {
        return danceRepository.findById(id).get();
    }


    @PostMapping("/dance")
    public Dance createDance(@RequestBody Dance dance) {
        return danceRepository.save(dance);
    }


    @PutMapping("/dance/{danceId}/user/{userId}")
      public   Dance practiceDanceByUser(@PathVariable Integer danceId,@PathVariable Integer userId){
        User user = userRepository.findById(userId).get();
        Dance dance = danceRepository.findById(danceId).get();
        dance.addUser(user);
        return danceRepository.save(dance);

    }





}
