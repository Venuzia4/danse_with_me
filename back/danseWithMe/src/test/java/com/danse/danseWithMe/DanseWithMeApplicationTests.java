package com.danse.danseWithMe;

import com.danse.danseWithMe.entity.User;
import com.danse.danseWithMe.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class DanseWithMeApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	void findByGenreOrCountry() {
		List<User> users =userRepository.findByGenreOrCountry("feminin","bordeaux");
		users.forEach((user)->{
			System.out.println(user.getId());
			System.out.println(user.getGenre());
		});
	}

}
