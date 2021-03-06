package com.ts.dto;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
@XmlRootElement
@Entity

public class Assistant {
	@Id@GeneratedValue
	private int assistantId;
	private String assistantName;
	private String userName;
	private String mobileNumber;
	private String password;
	
	//@OneToMany
	//@JoinColumn(name="patientId")
	//private Set<Patient> patientList =new HashSet<Patient>();
	
	//@OneToOne
	//@JoinColumn(name="doctorId")
	//private Doctor doctor;
	
	public int getAssistantId() {
		return assistantId;
	}
	public void setAssistantId(int assistantId) {
		this.assistantId = assistantId;
	}
	public String getAssistantName() {
		return assistantName;
	}
	public void setAssistantName(String assistantName) {
		this.assistantName = assistantName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
		return "Assistant [assistantId=" + assistantId + ", assistantName=" + assistantName + ", userName=" + userName
				+ ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
	
	
	

}
