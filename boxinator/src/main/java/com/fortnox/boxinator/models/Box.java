package com.fortnox.boxinator.models;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.lang.NonNull;

/**
 * @author max.angman
 */

//Database entity defenition
@Entity
public class Box {
    //All variable used in the database as non-null
    private @Id @GeneratedValue @NonNull Long id;
    private @NonNull String receiverName;
    private @NonNull int weight;
    private @NonNull String color;
    private @NonNull String destination;
    private @NonNull Long shippingCost;

    //Default constructor
    public Box() {}

    //Constructor with all values as parameters
    public Box(String receiverName, int weight, String color, String destination, Long shippingCost) {
        this.receiverName = receiverName;
        this.weight = weight;
        this.color = color;
        this.destination = destination;
        this.shippingCost = shippingCost;
    }

    // Getters and Setters
    public Long getId(){
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getReceiverName() {
        return receiverName;
    }
    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }

    public String getDestination() {
        return destination;
    }
    public void setDestination(String destination) {
        this.destination = destination;
    }
    public Long getShippingCost() {
        return shippingCost;
    }
    public void setShippingCost(Long shippingCost) {
        this.shippingCost = shippingCost;
    }

    @Override
    public boolean equals(Object other) {
        if(other == this) return true;
        if(other == null || this.getClass() != other.getClass()) return false;

        Box box = (Box) other;
        return Objects.equals(id, box.id) &&
        Objects.equals(receiverName, box.receiverName) &&
        Objects.equals(weight, box.weight) &&
        Objects.equals(color, box.color) &&
        Objects.equals(destination, box.destination) &&
        Objects.equals(shippingCost, box.shippingCost);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, receiverName, weight, color, destination, shippingCost);
    }

    @Override
    public String toString() {
        return "User{"+
        "id=" + id +
        ", receiverName=" + receiverName +
        ", weight=" + weight +
        ", color=" + color + 
        ", destination=" + destination + 
        ", shippingCost=" + shippingCost + "}";
    }
}