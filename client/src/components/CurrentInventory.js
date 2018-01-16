import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";

class CurrentInventory extends Component {
  constructor(props) {
    super(props);
  }

  renderList(inventory) {
    const list = inventory.map((car, i) => {
      return (
        <button
          class="btn btn-primary"
          key={car._id}
          onClick={() => this.props.deleteInventory(car._id)}>
          {car.make + " " + car.model + " " + car.year}
        </button>
      );
    });
    return list;
  }

  render() {
    if (this.props.inventory.inventory) {
      return (
        <div>
          <ul style={{ width: "100%" }}>
            {this.renderList(this.props.inventory.inventory)}
          </ul>
        </div>
      );
    } else {
      return <div>a</div>;
    }
  }
}

function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(CurrentInventory);
