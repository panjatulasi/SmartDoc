package com.ts.dao;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;

import com.ts.dto.Patient;
import com.ts.db.HibernateTemplate;

public class PatientDao {
	private SessionFactory factory = null;
	public int register(Patient patient) {
		System.out.println(patient); 
		return HibernateTemplate.addObject(patient);
	}
	public Patient getPatientByUserPass(String loginId,String password) {

		return (Patient)HibernateTemplate.getObjectByUserPass(loginId,password);
	}

}
