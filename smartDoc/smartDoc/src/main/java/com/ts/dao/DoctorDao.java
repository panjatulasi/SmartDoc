package com.ts.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


import com.ts.db.HibernateTemplate;
import com.ts.dto.Appointments;
import com.ts.dto.Doctor;
import com.ts.dto.Patient;

public class DoctorDao {
	private static SessionFactory sessionFactory;
	static {
		sessionFactory=new Configuration().configure().buildSessionFactory();
	}
	public int register(Doctor doctor) {
		System.out.println(doctor); 
		return HibernateTemplate.addObject(doctor);
	}
	public List<Doctor> getAllDepartments() {
		List<Doctor> doctors=(List)HibernateTemplate.getObjectListByQuery("From Doctor");
		System.out.println("Inside All Employees ..."+doctors);
		return doctors;
	}
public static Object getDoctorByUserPass(String loginId,String password) {
		
		String queryString = "from Doctor where userName = :loginId";
		  Query query = sessionFactory.openSession().createQuery(queryString);
		  query.setString("loginId", loginId);
		  Object queryResult = query.uniqueResult();
		  Doctor doctor = (Doctor)queryResult;
		  //String dbPassword = doctor.getPassword();
		  return doctor; 
		}
public static Object getDoctorByUserName(String userName) {
	
	String queryString = "from Doctor where userName = :userName";
	  Query query = sessionFactory.openSession().createQuery(queryString);
	  query.setString("userName", userName);
	  Object queryResult = query.uniqueResult();
	  Doctor doctor = (Doctor)queryResult;
	  return doctor; 
	}
public static int updateDoctor(Doctor doctor)
{
	int result=0;
	
	Transaction tx=null;
	
	try {
		
		Session session=sessionFactory.openSession();
		tx=session.beginTransaction();
		System.out.println("Inside Update Doctor"+doctor);
		
		session.saveOrUpdate(doctor);
		
		tx.commit();
		
		result=1;
		
	} catch (Exception e) {
	
		tx.rollback();
		
		e.printStackTrace();
	}
	
	return result;
}



}
