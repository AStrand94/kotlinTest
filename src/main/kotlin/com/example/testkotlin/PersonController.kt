package com.example.testkotlin

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*


@CrossOrigin
@RestController
class PersonController {

    @Autowired
    lateinit var personRepository: PersonRepository

    @Autowired
    lateinit var itemRepository: ItemRepository

    @RequestMapping("/save")
    fun process(): Person{
        val items : ArrayList<Item> = ArrayList()
        items.add(Item(1,"Box"))
        personRepository.save(Person(2,"Lise",20))
        personRepository.save(Person(3, "Andreas",23))
        itemRepository.save(items[0])
        val p = Person(1,"Nils" ,33,items)
        personRepository.save(p)


        return personRepository.findByName("Andreas")[0]

    }

    @GetMapping("/persons")
    fun getPersons() : Iterable<Person> {
        return personRepository.findAll()
    }

    @GetMapping("/person")
    fun test(@RequestParam(value = "id")  id: Long) : Person {
        return personRepository.findById(id).get()
    }

    @PostMapping("/person")
    fun createPerson(@RequestBody(required = true) person: Person): ResponseEntity<HttpStatus> {
        if (person.name.isEmpty() || person.age < 1){
            return ResponseEntity.badRequest().build()
        }
        personRepository.save(person)
        return ResponseEntity.ok().build()
    }
}