import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }

  handleReload = () => {
    this.setState({ error: null });
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
            Ошибка
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-heading">
            Что-то сломалось
          </h1>
          <button
            onClick={this.handleReload}
            className="mt-8 px-6 py-3 border border-black dark:border-white text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Перезагрузить
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}