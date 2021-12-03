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
    <div>
      <h1>Appointments</h1>
      {
        Object.entries(data).map(([key, value]) => {
          if (!value.length) {
            return (
              <h2>
                {`No ${key === 'today' ? '' : key} appointments ${key !== 'today' ? '' : key}`}
              </h2>
            );
          }
          return (
            <React.Fragment key={key}>
              <h2>
                {`${key}${key === 'today' ? "'s" : ''} appointments`}
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
