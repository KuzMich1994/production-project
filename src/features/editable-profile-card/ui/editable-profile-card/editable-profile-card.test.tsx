import { renderComponent } from 'shared/lib/tests/render-component/render-component';
import { Profile } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profile-slice';
import EditableProfileCard from './editable-profile-card';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastName: 'admin',
  age: 28,
  currency: Currency.RUB,
  country: Country.RUSSIA,
  city: 'Dmitrov',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin123',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Режим readonly должен переключиться', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CanselButton')).toBeInTheDocument();
  });

  test('При отмене значения должны обнуляться', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CanselButton'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
  });

  test('Должна появляться ошибка', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('Если нет ошибок валидацииб то на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
