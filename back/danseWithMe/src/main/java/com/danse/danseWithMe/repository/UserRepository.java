package com.danse.danseWithMe.repository;


import com.danse.danseWithMe.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findByGenreOrCity(String genre, String city);

    List<User> findUsersByDancesId(Integer id);

}
