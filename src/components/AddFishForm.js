import React from 'react';
import PropTypes from 'prop-types';


class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef()

  static propTypes = {
    addFish: PropTypes.func
  }

  createFish = event => {
    event.preventDefault();

    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value,
    }

    this.props.addFish(fish);

    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish} >
        <input type="text" name="Name" ref={this.nameRef} placeholder="Name" />
        <input type="text" name="Price" ref={this.priceRef} placeholder="Price" />
        <select name="status" ref={this.statusRef} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea type="text" name="Desc" ref={this.descRef} placeholder="Desc" />
        <input type="text" name="Image" ref={this.imageRef} placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;