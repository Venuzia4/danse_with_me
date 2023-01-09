package com.danse.danseWithMe.repository;

import com.danse.danseWithMe.entity.Dance;
import com.danse.danseWithMe.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DanceRepository extends CrudRepository<Dance,Integer> {





}
