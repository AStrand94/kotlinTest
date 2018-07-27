package com.example.testkotlin

import javax.persistence.*

@Entity
@Table(name = "Item")
data class Item (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long = -1,

    @Column(name ="description")
    val description : String = ""
)