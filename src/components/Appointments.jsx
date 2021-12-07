import React from 'react';
import getAppointments from '../api/getAppointments';
import useLockedData from '../hooks/useLockedData';
import AppointmentsList from './AppointmentList';

const Appointments = () => {
  const {
    notReady, notReadyContent, data,
  } = useLockedData('appointments', getAppointments);

  if (notReady) {
    return notReadyContent;
  }

  return (
    <div className="container mx-auto">
      <h1 className="m-4 py-4 text-2xl text-center lg:text-left lg:pl-4 mt-24">Your Appointments</h1>
      {
        Object.entries(data).map(([key, value]) => {
          if (!value.length) {
            return (
              <h2 key={key} className="text-xl text-center">
                {`No ${key === 'Today' ? '' : key} appointments ${key !== 'Today' ? '' : key}`}
              </h2>
            );
          }
          return (
            <React.Fragment key={key}>
              <h2 className="text-xl text-center">
                {`${key}${key === 'Today' ? "'s" : ''} appointments`}
              </h2>
              <AppointmentsList collection={value} />
            </React.Fragment>
          );
        })
      }

    </div>
  );
};

export default Appointments;
