import React from 'react';

import { Container, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';

class Progress extends React.Component {

    render() {
        return (
            <Container>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Container>
        );
    }
}

export default Progress;