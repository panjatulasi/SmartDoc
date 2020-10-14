package com.ts.dao;

import org.hibernate.SessionFactory;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Pharmacist;

public class PharmacistDao {
	private SessionFactory factory = null;
	public int register(Pharmacist pharmacist) {
		System.out.println(pharmacist); 
		return HibernateTemplate.addObject(pharmacist);
	}
	public Pharmacist getDoctorByUserPass(String loginId,String password) {

		return (Pharmacist)HibernateTemplate.getObjectByUserPass(loginId,password);
	}

}
