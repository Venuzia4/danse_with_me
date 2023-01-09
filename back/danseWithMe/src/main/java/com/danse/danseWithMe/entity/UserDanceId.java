package com.danse.danseWithMe.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Data
@NoArgsConstructor
public class UserDanceId implements Serializable {
    private static final long serialVersionUID = -4774916194158426374L;
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "id_user", nullable = false)
    private Integer idUser;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UserDanceId entity = (UserDanceId) o;
        return Objects.equals(this.idUser, entity.idUser) &&
                Objects.equals(this.id, entity.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, id);
    }

}