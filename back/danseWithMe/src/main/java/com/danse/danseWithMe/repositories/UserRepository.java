package com.danse.danseWithMe.repositories;


import com.danse.danseWithMe.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findByGenreOrCity(String genre, String city);

    List<User> findUsersByDancesId(Integer id);
    List<User> findUserByDancesName(String name);

    List <User> findUserByGenreAndAndDancesName(String name ,String genre);


}
