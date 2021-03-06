package com.ts.dto;

import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;


@XmlRootElement
@Entity
public class Patient {
	@Id@GeneratedValue
	private int patientId;
	private String patientName;
	private String userName;
	private int age;
	private String gender;
	private String mobileNumber;
	private String password;
	//@ManyToOne
	//@JoinColumn(name="doctorId")
	//private Doctor doctor;
	
	//@OneToMany 
	//private Set<Department> deptList =new HashSet<Department>();
	
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", userName=" + userName + ", age="
				+ age + ", gender=" + gender + ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
	

}
