package com.danse.danseWithMe.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String firstname;

    private String lastname;

    private String genre;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    private String city;
    private  String email;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String picture;


    @ManyToMany
    @JoinTable(name = "user_dance",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id"))
    private Set<Dance> dances = new HashSet<>();



}