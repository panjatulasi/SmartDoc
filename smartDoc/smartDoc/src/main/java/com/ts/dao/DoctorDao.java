package com.ts.dao;

import org.hibernate.SessionFactory;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Doctor;

public class DoctorDao {
	private SessionFactory factory = null;
	public int register(Doctor doctor) {
		System.out.println(doctor); 
		return HibernateTemplate.addObject(doctor);
	}
	public Doctor getDoctorByUserPass(String loginId,String password) {

		return (Doctor)HibernateTemplate.getObjectByUserPass(loginId,password);
	}


}
