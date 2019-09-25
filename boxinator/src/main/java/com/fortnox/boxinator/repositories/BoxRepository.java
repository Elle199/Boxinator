package com.fortnox.boxinator.repositories;

import com.fortnox.boxinator.models.Box;

import org.springframework.data.repository.CrudRepository;

/**
 * @author max.angman
 */

//Local repository of Database, CrudRepository<modelObject, indexType>
public interface BoxRepository extends CrudRepository<Box, Long> {

}