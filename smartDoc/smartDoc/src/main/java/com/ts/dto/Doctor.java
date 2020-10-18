package com.ts.dto;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
@XmlRootElement
@Entity
public class Doctor {
	@Id@GeneratedValue
	private int doctorId;
	private String doctorName;
	private String userName;
	private String department;
	private String mobileNumber;
	private String password;
	//@OneToMany
	//@JoinColumn(name="patientId")
	//private Set<Patient> patientList =new HashSet<Patient>();
	
	//@ManyToOne
	//@JoinColumn(name="pharmacistId")
	//private Pharmacist pharmacist;
	
	//@OneToOne
	//@JoinColumn(name="assistantId")
	//private Assistant assistant;
	public int getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
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
		return "Doctor [doctorId=" + doctorId + ", doctorName=" + doctorName + ", userName=" + userName
				+ ", department=" + department + ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
	

}
