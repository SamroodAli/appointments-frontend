import PropTypes from 'prop-types';

const COLOR_ENUM = [
  'indigo',
  'red',
  'green',
  'purple',
  'pink',
  'blue',
];

const AppointmentsList = ({ collection }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {collection.map(
      (appointment, index) => {
        const color = COLOR_ENUM[index % COLOR_ENUM.length];
        return (
          <div className={`bg-${color}-100 rounded-sm overflow-hidden shadow-lg m-8`} key={appointment.id}>
            <div className="h-32 bg-cover hover:bg-gray" style={{ backgroundImage: 'url(\'https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png\')' }} />
            <div className="mx-6 my-4 border-b border-gray-light">
              {/* <div className="font-medium text-base text-gray-darker mb-4">
                  Item name goes here
                  </div> */}
              <p className="font-normal text-gray-dark text-sm mb-2">
                Teacher:
                {' '}
                {appointment.teacher.name}
              </p>
              <p className="font-normal text-gray-dark text-sm mb-4">
                Time:
                {' '}
                {appointment.time}
              </p>
            </div>
          </div>
        );
      },
    )}
  </div>
);

AppointmentsList.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AppointmentsList;
