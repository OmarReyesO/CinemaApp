import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import Text from '../Text';
import {CartContext} from '../../context/CartContext';
import {
  Card,
  CardRemove,
  CardRemoveText,
  Container,
  CardContent,
  QtySelector,
  QtyBtn,
} from './styles';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';

import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SaleItem} from '../../@types/Sale';

const LIST_ITEM_HEIGHT = 70;
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

type ItemCardProps = Pick<PanGestureHandlerProps, 'simultaneousHandlers'> & {
  item: SaleItem;
  onDismiss?: (item: SaleItem) => void;
};

const ItemCard = ({item, onDismiss, simultaneousHandlers}: ItemCardProps) => {
  const {increaseItemQty, decreaseItemQty} = useContext(CartContext) as Cart;
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(item);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity};
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
    };
  });

  return (
    <Container style={[rTaskContainerStyle]}>
      <CardRemove style={[rIconContainerStyle]}>
        <CardRemoveText>Remove item</CardRemoveText>
      </CardRemove>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View style={[rStyle]}>
          <Card>
            <CardContent>
              {item.type === 'ticket' && <Text>{item.movie}</Text>}
              {item.type !== 'ticket' && <Text>{item.name}</Text>}
              <Text>${item.price.toFixed(2)} ea.</Text>
            </CardContent>
            <QtySelector>
              {item.type === 'food' && (
                <QtyBtn>
                  <Text
                    fontSize="h4"
                    fontWeight="bold"
                    color="secondary"
                    onPress={() => decreaseItemQty(item)}>
                    -
                  </Text>
                </QtyBtn>
              )}
              <Text fontSize="large" fontWeight="light">
                {item.qty}
              </Text>
              {item.type === 'food' && (
                <QtyBtn onPress={() => increaseItemQty(item)}>
                  <Text fontSize="h4" fontWeight="bold" color="secondary">
                    +
                  </Text>
                </QtyBtn>
              )}
            </QtySelector>
          </Card>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};
export default ItemCard;
