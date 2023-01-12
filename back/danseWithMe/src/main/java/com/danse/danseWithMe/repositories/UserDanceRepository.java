package com.danse.danseWithMe.repositories;
import com.danse.danseWithMe.entities.Dance;
import com.danse.danseWithMe.entities.User;
import com.danse.danseWithMe.entities.UserDance;
import com.danse.danseWithMe.entities.UserDanceId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserDanceRepository extends CrudRepository<UserDance, UserDanceId> {




    @Query(value="SELECT dancer.* FROM dance INNER JOIN user_dance ON user_dance.id = dance.id INNER JOIN user as dancer ON user_dance.id_user = dancer.id WHERE dance.name =? ; ",
            nativeQuery = true)

    List<User> findUserDanceBy(String name);



}
