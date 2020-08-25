import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const ClassDropdown = styled.div``;

const GET_ALL_TEMPLATE_CLASSES_QUERY = gql`
  query getAllTemplateClasses {
    templateClasses {
      id
      name
    }
  }
`;

// TODO Fix this mutation
const CREATE_CLASS_FOR_CHARACTER_MUTATION = gql`
  mutation createClassForCharacter($templateClassName: String!) {
    createClass(templateClassName: $templateClassName) {
      id
      class
      level
    }
  }
`;

const CreateCharacterClass = () => {
  function classSelection() {
    const { loading, error, data } = useQuery(GET_ALL_TEMPLATE_CLASSES_QUERY);

    if (loading) return 'Loading...';
    if (error) return `${error.message}`;

    return (
      <form>
        <label for="class-select">Choose a Class:</label>
        <select name="class" id="class-select">
          <option value="">Please choose an option</option>
          {data.templateClasses.map((templateClass) => (
            <option key={templateClass.name} value={templateClass.name}>
              {templateClass.name}
            </option>
          ))}
        </select>
      </form>
    );
  }
  return <ClassDropdown>{classSelection()}</ClassDropdown>;
};

export default CreateCharacterClass;
