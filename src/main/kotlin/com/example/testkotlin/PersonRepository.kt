package com.example.testkotlin

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

interface PersonRepository : CrudRepository<Person, Long>{
    fun findByName(name : String):List<Person>

}

interface ItemRepository : CrudRepository<Item, Long>