import React from "react";
import LeftFilterSec from "./dashboard/LeftFilterSec";
import RightProductSec from "./dashboard/RightProductSec";
import { getMethod, products } from "utils/Apis";
import store from "store";
import { getProducts } from "utils/ActionDispatcher";
import { IProduct } from "utils/InterfacePool";
import { IAppState } from "reducer";
import { connect } from "react-redux";


type IProps =  LinkStateProps;

interface LinkStateProps {
  products: IProduct | [] ;
}

const mapStateToProps = (
  state: IAppState,
  ownProps: any
): LinkStateProps => {
  return {
   products: state.products.allProducts
  };
};


interface IState {
    [key: string]:  any
}

class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount = () => {
    this.getAllProducts();
  };

  private getAllProducts = async () => {
    this.setState({ isLoading: true });
    let res = await getMethod(products);
    if (res && res.status === 200) {
      this.setState({ isLoading: false });
      console.log(res);
      let data = res.data;
      store.dispatch(getProducts(data));
      this.setState({allProducts: this.props.products})
    } else {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { isLoading, allProducts } = this.state;
    return (
      <div className="dashboard-wrap">
        <LeftFilterSec />
        {isLoading ? "Loading..." : <RightProductSec products={allProducts} />}
      </div>
    );
  }
}

export default connect(mapStateToProps,{})(Dashboard);
