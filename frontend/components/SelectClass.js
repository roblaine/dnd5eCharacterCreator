import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const ClassDropdown = stled.div``;

const GET_ALL_TEMPLATE_CLASSES_QUERY = gql`
  query getAllTemplateClasses {
    templateClasses {
      id
      name
    }
  }
`;

const SelectClass = () => {
  function classSelection() {
    const { loading, error, data } = useQuery(GET_ALL_TEMPLATE_CLASSES_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <ClassDropdown>
        <label for="class-select">Choose a Class:</label>
        <select name="class" id="class-select">
          <option value="">Please choose an option</option>
          {data.templateClasses.map((templateClass) => (
            <option key={templateClass.name} value={templateClass.name}>
              {templateClass.name}
            </option>
          ))}
        </select>
      </ClassDropdown>
    );
  }
};

export default SelectClass;
