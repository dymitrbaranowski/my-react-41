import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
// import { MaterialList } from './MaterialList/MaterialList';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    // error: false,
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { isLoading } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm onSubmit={this.addMaterial} />
      </Layout>
    );
  }
}
