package com.danse.danseWithMe.dto;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DanceDto {
    private Integer id;

    private String name;

    @Lob
    private String description;

    @Lob
    private String picture;

}
