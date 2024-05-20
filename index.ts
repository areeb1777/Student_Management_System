#! /usr/bin/env node

import inquirer from "inquirer";

// Define the student class
class Student {
    static counter = 1000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];  // initialize an empty array for courses
        this.balance = 1000;
    }

    // Metod to enroll a student in a course
    enroll_course(course: string) {
        this.courses.push(course);
    }

    // Method to view a student balance 
    view_balance() {
        console.log(`Balance for ${this.name} : $${this.balance}`)
    }

    // Method to pay a student fees
    pay_fees(amount: number) {
        this.balance -= amount;
        console.log(`$${amount} Fee Paid Successfully for ${this.name}`);
    }

    // Method to display student status
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}