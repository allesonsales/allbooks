
import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: '' };
    }
  
    static getDerivedStateFromError(error) {
      // Atualiza o estado para exibir a UI de fallback
      return { hasError: true, errorMessage: error.message };
    }
  
    componentDidCatch(error, info) {
      // Você pode registrar o erro em um serviço de monitoramento
      console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Algo deu errado: {this.state.errorMessage}</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;