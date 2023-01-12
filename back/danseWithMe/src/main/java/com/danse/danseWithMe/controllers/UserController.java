package com.danse.danseWithMe.controllers;

import com.danse.danseWithMe.entities.User;
import com.danse.danseWithMe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/all")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getuser(@PathVariable Integer id) {
        return userRepository.findById(id).get();
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users")
    public List<User> getUsersByGenreOrCountry(@RequestParam String genre , @RequestParam (required = false) String city){
        return userRepository.findByGenreOrCity(genre,city);
    }

    @GetMapping("/dances/{danceId}/users")
    public List<User> getUsersByDance(@PathVariable Integer danceId) {
        return  userRepository.findUsersByDancesId(danceId);
    }

    @GetMapping("/getUsers")
    public List<User> getUsersByDanceName(@RequestParam String name) {
        return  userRepository.findUserByDancesName(name);
    }

    @GetMapping("/getUsersByDance")
    public List<User> getUsersByDanceNameAndGenre(@RequestParam String name, @RequestParam String genre) {
        return  userRepository.findUserByGenreAndAndDancesName(genre,name);
    }




}
