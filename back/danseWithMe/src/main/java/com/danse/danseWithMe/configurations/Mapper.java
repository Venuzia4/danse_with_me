package com.danse.danseWithMe.configurations;


import com.danse.danseWithMe.dto.DanceDto;
import com.danse.danseWithMe.dto.UserDto;
import com.danse.danseWithMe.entities.Dance;
import com.danse.danseWithMe.entities.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Mapper{

    @Bean
    public ModelMapper modelMapper(){

        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setFieldMatchingEnabled(true)
                .setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE);


        TypeMap<Dance, DanceDto> danceMapper = modelMapper.createTypeMap(Dance.class, DanceDto.class);
        danceMapper.addMappings(
                mapper -> mapper.map(src -> src.getUsers(), DanceDto::setId)
        );

        TypeMap<User, UserDto> userMapper = modelMapper.createTypeMap(User.class, UserDto.class);
        userMapper.addMappings(
                mapper -> mapper.map(src -> src.getDances(), UserDto::setId)
        );

       return modelMapper;
    }

}
