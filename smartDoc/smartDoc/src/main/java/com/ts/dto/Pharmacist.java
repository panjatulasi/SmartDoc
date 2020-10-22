package com.ts.dto;
import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.*;
@XmlRootElement
@Entity
public class Pharmacist {
	@Id@GeneratedValue
	private int pharmacistId;
	private String pharmacistName;
	private String userName;
	private String mobileNumber;
	private String password;
//	@ManyToOne
//	@JoinColumn(name="doctorId")
//	private Doctor doctor;
	
	public int getPharmacistId() {
		return pharmacistId;
	}
	public void setPharmacistId(int pharmacistId) {
		this.pharmacistId = pharmacistId;
	}
	public String getPharmacistName() {
		return pharmacistName;
	}
	public void setPharmacistName(String pharmacistName) {
		this.pharmacistName = pharmacistName;
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
		return "Pharmacist [pharmacistId=" + pharmacistId + ", pharmacistName=" + pharmacistName + ", userName="
				+ userName + ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
	

}
