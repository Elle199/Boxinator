package com.fortnox.boxinator;

import com.fortnox.boxinator.models.Box;
import com.fortnox.boxinator.repositories.BoxRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author max.angman
 */

 //Used to pre-fill database with data
@Component
public class DatabaseLoader implements CommandLineRunner { 
    
    //Local instance of respository
    private final BoxRepository boxRepository;

    //Register the new repository
    @Autowired
	public DatabaseLoader(BoxRepository boxRepository) {
		this.boxRepository = boxRepository;
	}

    //Fills the database with a new box
	@Override
	public void run(String... strings) throws Exception {
		this.boxRepository.save(new Box("Max", 5, "(255, 0, 255)", "Mexico", "2000"));
		this.boxRepository.save(new Box("Fanny", 10, "(155, 20, 255)", "Stockholm", "500"));
	}
}