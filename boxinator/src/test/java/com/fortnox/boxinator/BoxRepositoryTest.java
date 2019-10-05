package com.fortnox.boxinator;

import com.fortnox.boxinator.models.Box;
import com.fortnox.boxinator.repositories.BoxRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

// Only actual backend test.
@RunWith(SpringRunner.class)
@DataJpaTest
public class BoxRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private BoxRepository boxRepository;
    
    @Test
    public void addAndGetFromDb() {
        // Craete local box
        Box box = new Box("Max", 50, "(255,255,255)", "Sweden", 65l);
        // Add box
        entityManager.persist(box);
        // Flush out the manager
        entityManager.flush();

        // Load box from repository
        Box foundBox = boxRepository.findById(box.getId()).get();
        
        // Check if boxes have the same id
        assertThat(foundBox.getId()).isEqualTo(box.getId());
    }
}