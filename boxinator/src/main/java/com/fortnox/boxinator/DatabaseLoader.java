package com.fortnox.boxinator;

import com.fortnox.boxinator.models.Box;
import com.fortnox.boxinator.repositories.BoxRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author max.angman
 */

// Used to pre-fill database with data
@Component
public class DatabaseLoader implements CommandLineRunner {

	// Local instance of respository
	private final BoxRepository boxRepository;

	// Register the new repository
	@Autowired
	public DatabaseLoader(BoxRepository boxRepository) {
		this.boxRepository = boxRepository;
	}

	// Fills the database with a new box
	@Override
	public void run(String... strings) throws Exception {
		this.boxRepository.save(new Box("Kalle", 5, "(255, 0, 255)", "China", 20l));
		this.boxRepository.save(new Box("Lisa", 10, "(155, 255, 150)", "Sweden", 13l));
	}
}