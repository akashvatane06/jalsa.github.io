import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          fontFamily: 'Inter, sans-serif',
          color: '#1c1c1c',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{ color: '#E23744', marginBottom: '10px' }}>Something went wrong</h2>
          <p>Please refresh the page or check the console for details.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#E23744',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '10px',
              fontSize: '16px'
            }}
          >
            Refresh Page
          </button>
          {this.state.error && (
            <details style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', color: '#E23744' }}>Error Details</summary>
              <pre style={{ 
                background: '#f0f0f0', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
                maxHeight: '200px',
                marginTop: '10px',
                fontSize: '12px'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo && (
                  <div style={{ marginTop: '10px' }}>
                    {this.state.errorInfo.componentStack}
                  </div>
                )}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault(); // Prevent default browser error handling
});

// Check if root element exists and render app
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Inter, sans-serif; color: #1c1c1c; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h2 style="color: #E23744;">Root element not found</h2>
      <p>The root element is missing from the page.</p>
    </div>
  `;
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    );
    
    // Fallback: If nothing renders after 3 seconds, show error
    setTimeout(() => {
      if (rootElement.children.length === 0 || (rootElement.children.length === 1 && rootElement.children[0].tagName === 'SCRIPT')) {
        console.error('App failed to render - showing fallback');
        rootElement.innerHTML = `
          <div style="padding: 20px; text-align: center; font-family: Inter, sans-serif; color: #1c1c1c; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <h2 style="color: #E23744; margin-bottom: 10px;">Application failed to load</h2>
            <p>Please check the browser console for errors.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background: #E23744; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px; font-size: 16px;">
              Refresh Page
            </button>
          </div>
        `;
      }
    }, 3000);
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Inter, sans-serif; color: #1c1c1c; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <h2 style="color: #E23744; margin-bottom: 10px;">Failed to load application</h2>
        <p>Error: ${error.message}</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #E23744; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px; font-size: 16px;">
          Refresh Page
        </button>
      </div>
    `;
  }
}

