package com.ts.dto;

import java.util.Date;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement
@Entity
public class Appointments {
	@Id@GeneratedValue
	private int appointmentId;
	private String patientUserName;
	private String department;
	private Date date;
	private String time;
	private String reason;
	private String accept;
	private String prescription;
	private String uploadedReports;
	private String status;
	public int getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}
	public String getPatientUserName() {
		return patientUserName;
	}
	public void setPatientUserName(String patientUserName) {
		this.patientUserName = patientUserName;
	}
	
	public String getPrescription() {
		return prescription;
	}
	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
	public String getUploadedReports() {
		return uploadedReports;
	}
	public void setUploadedReports(String uploadedReports) {
		this.uploadedReports = uploadedReports;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getAccept() {
		return accept;
	}
	public void setAccept(String accept) {
		this.accept = accept;
	}
	@Override
	public String toString() {
		return "Appointments [appointmentId=" + appointmentId + ", patientUserName=" + patientUserName + ", department="
				+ department + ", date=" + date + ", time=" + time + ", reason=" + reason + ", accept=" + accept
				+ ", prescription=" + prescription + ", uploadedReports=" + uploadedReports + ", status=" + status
				+ "]";
	}
	

}
