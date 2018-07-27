package com.example.testkotlin

import javax.persistence.*

@Entity
@Table(name = "Person")
data class Person (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = -1,

    @Column(name = "name")
    val name : String = "",

    @Column(name="age")
    val age: Int = -1,

    @ManyToMany(fetch = FetchType.EAGER)
    val items : List<Item> = ArrayList()
)

