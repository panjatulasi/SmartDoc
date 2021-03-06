package com.ts.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.ts.db.HibernateTemplate;
import com.ts.dto.Appointments;
import com.ts.dto.Patient;

public class AppointmentsDao {
	public int register(Appointments appointments) {
		System.out.println(appointments+"Inside DAO"); 
		return HibernateTemplate.addObject(appointments);
	}
	public List<Appointments> getAllAppointments(String department) {
		List<Appointments> appointments=(List)HibernateTemplate.getObjectListByQuery("From Appointments where department='"+department+"' and accept='' order by date asc");
		System.out.println("Inside All Employees ..."+appointments);
		return appointments;
	}
	public List<Appointments> getUpcomingAppointments(String department) {
		List<Appointments> appointments=(List)HibernateTemplate.getObjectListByQuery("From Appointments where department='"+department+"' and status is NULL and accept='Yes' order by date asc");
		System.out.println("Inside Doctor Upcoming Appointments ..."+appointments);
		return appointments;
	}
	public List<Appointments> getAppointmentsByUserName(String userName) {
		List<Appointments> appointments=(List)HibernateTemplate.getObjectListByQuery("From Appointments where patientUserName='"+userName+"' and status is not NULL order by date desc");
		System.out.println("Inside getAppointmentsByUserName used in previous Appointments  ..."+appointments);
		return appointments;
	}
	public List<Appointments> getAppointmentsByUserNameWithNullStatus(String userName) {
		List<Appointments> appointments=(List)HibernateTemplate.getObjectListByQuery("From Appointments where patientUserName='"+userName+"' and status is NULL order by date asc");
		System.out.println("Inside getAppointmentsByUserName used in patient Upcoming Appointments  ..."+appointments);
		return appointments;
	}
	public void deleteAppointment(Appointments appointment) {
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		
		session.delete(appointment);
		
		Transaction txn = session.beginTransaction();
		txn.commit();		
		session.close();
	}
	public Appointments getAppointment(int appointmentId) {
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");	
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		
		Appointments appointment = (Appointments) session.get(Appointments.class, appointmentId);
		session.close();
		
		System.out.println(appointment);
		return appointment;
	}

	//update

	public void updateAppointment(Appointments appointment) {
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		
		session.saveOrUpdate(appointment); 
		
		Transaction txn = session.beginTransaction();
		txn.commit();		
		session.close();
	}


}
