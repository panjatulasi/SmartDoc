package com.ts.dto;

import java.util.Date;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement
@Entity
public class Reports {
	@Id@GeneratedValue
	private int id;
	private String userName;
	private Date date;
	private String report;
	private String description;
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}
	@Override
	public String toString() {
		return "Reports [id=" + id + ", userName=" + userName + ", date=" + date + ", report=" + report
				+ ", description=" + description + "]";
	}
	
	
	

}
