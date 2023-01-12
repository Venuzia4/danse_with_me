package com.danse.danseWithMe.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Integer id;

    private String firstname;

    private String lastname;

    private String genre;
    private List<DanceDto> dances;

}
